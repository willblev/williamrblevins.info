import { bind } from 'decko';
import { Component, h } from 'preact';

import { commands } from './commands';
import { Input } from './components';
import { registery } from './registery';

/**
 * Main component of the application.
 * Handles the display of any output.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class App extends Component<{}, State> {
  /**
   * Output of any commands.
   * Every string is a new line.
   */
  public state: State = {
    output: ['Welcome `root` to williamrblevins.info, enter `help` for help.'],
  };

  /**
   * Reference of the container element.
   * This is for automatic scrolling.
   */
  private container: Element;

  /**
   * Constructor, registers all commands.
   */
  public constructor() {
    super();
    registery.register(commands);
  }

  /**
   * Render the component.
   *
   * Called by Preact.
   *
   * @return The element to render.
   */
  public render(): JSX.Element {
    requestAnimationFrame(() => this.container.scrollIntoView(false));

    return (
      <div ref={el => (this.container = el)}>
        {this.state.output.map(out =>
          <div>
            {out} &nbsp;
          </div>,
        )}
        <Input onEmit={this.onEmit} />
      </div>
    );
  }

  /**
   * Function to print out the output of commands.
   *
   * @param out The list of strings to print out.
   */
  @bind
  private onEmit(out: string[]): void {
    if (out.length === 0) {
      return;
    }
    this.setState({ output: [...this.state.output, ...out, ''] });
  }
}

interface State {
  output: string[];
}
