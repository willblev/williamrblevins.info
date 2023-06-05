/**
 * Default command class
 * All commands are instances of this class.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Command {
  /**
   * Trigger for the command.
   *
   * Must be unique.
   */
  public trigger: string;
  /**
   * Description of the command.
   *
   * This is displayed by the `help` command.
   */
  public description: string;

  /**
   * Function to run when this command is triggered.
   *
   * @param args A list of arguments given by the command.
   * @return The output of the command. Can be a promise.
   */
  public async run(args: string[]): Promise<string> {
    return '';
  }
}
