import { Command, registery } from '../registery';

/**
 * Help command.
 *
 * Shows all available commands and their respective descriptions.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Help implements Command {
  /**
   * Trigger for the command.
   *
   * Must be unique.
   */
  public trigger: string = 'help';
  /**
   * Description of the command.
   *
   * This is displayed by the `help` command.
   */
  public description: string = 'Display all of the available commands.';

  /**
   * Function to run when this command is triggered.
   *
   * @param args A list of arguments given by the command.
   * @return The output of the command. Can be a promise.
   */
  public async run(args: string[]): Promise<string> {
    let returnData = 'Available commands:\n';
    registery.getAll().forEach(command => {
      returnData += `\n ${command.trigger}: ${command.description}`;
    });

    return returnData;
  }
}
