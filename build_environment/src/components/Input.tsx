import { bind } from 'decko';
import { Component, h } from 'preact';

import { registery } from '../registery';

/**
 * Input component.
 *
 * Handles user input and passes it to the registery.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Input extends Component<Props, State> {
  /**
   * Initial component state.
   */
  public state: State = {
    input: '',
    inputOn: true,
  };

  /**
   * The input element.
   */
  private input: HTMLSpanElement;
  /**
   * The id of the cursor interval.
   *
   * Used to cancel the interval when unmounted.
   */
  private intervalId: any;
  /**
   * Indicates if a command is currently running.
   */
  private isBusy: boolean = false;

  /**
   * Clear the interval of the cursor when unmounting.
   *
   * Called by Preact.
   */
  public componentWillUnmount(): void {
    clearInterval(this.intervalId);
  }

  /**
   * Start the interval for the cursor.
   *
   * Called by Preact.
   */
  public componentDidMount(): void {
    this.intervalId = setInterval(() => {
      if (this.isBusy) {
        return;
      }
      this.setState({ inputOn: !this.state.inputOn });
    }, 500);
  }

  /**
   * Render the Component.
   *
   * Called by Preact.
   */
  public render(props: Props, state: State): JSX.Element {
    // Make sure the input is focused to receive input.
    requestAnimationFrame(() => this.input.focus());

    return (
      <div id="input-container">
        {!this.isBusy && 'root@williamrblevins.info > '}
        <span
          contentEditable
          id="input"
          ref={el => (this.input = el as HTMLSpanElement)}
          onInput={this.onInput}
          onKeyDown={this.onKeydown}
          onBlur={() => requestAnimationFrame(() => this.input.focus())}
        >
          {this.state.input}
        </span>
        {state.inputOn && '_'}
      </div>
    );
  }

  /**
   * Handles generic input events for the input.
   *
   * @param e Input event.
   */
  @bind
  private onInput(e: Event): void {
    if (this.isBusy) {
      return;
    }

    this.setState({
      input: this.input.textContent,
    });
  }

  /**
   * Handles keydown events.
   *
   * This handles keys which require alternative actions, like Enter.
   *
   * @param e
   */
  @bind
  private onKeydown(e: KeyboardEvent): void {
    if (this.isBusy) {
      return;
    }

    if (e.keyCode === 13) {
      // Enter
      e.preventDefault();
      this.processCommand();
    }
  }

  /**
   * Run a command.
   */
  private async processCommand(): Promise<void> {
    // Prepare for execution.
    this.isBusy = true;
    this.state.inputOn = false;
    const command = this.state.input;
    this.setState({ input: '' });

    // Execute and display output.
    this.props.onEmit([`root@williamrblevins.info > ${command}`]);
    const response = await registery.run(command);
    this.props.onEmit(response !== '' ? response.split('\n') : []);

    // Cleanup.
    this.isBusy = false;
  }
}

interface Props {
  onEmit: (out: string[]) => void;
}

interface State {
  input: string;
  inputOn: boolean;
}
