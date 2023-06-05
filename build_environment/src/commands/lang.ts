import { Command } from '../registery';

/**
 * Language command.
 *
 * Show some languages I use.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Lang implements Command {
  /**
   * Trigger for the command.
   *
   * Must be unique.
   */
  public trigger: string = 'lang';
  /**
   * Description of the command.
   *
   * This is displayed by the `help` command.
   */
  public description: string = 'Show the languages which I use.';

  /**
   * Function to run when this command is triggered.
   *
   * @param args A list of arguments given by the command.
   * @return The output of the command. Can be a promise.
   */
  public async run(args: string[]): Promise<string> {
    return `\
      Human Languages:
      - English: Advanced
      - Spanish: Advanced
      - Catalan: Intermediate

      Programming Languages:
      - Python: Advanced
      - Perl: Elementary
      - Lua: Elementary
      - Bash: Advanced
      - C: Elementary
      - R: Intermediate
      - SQL: Elementary
      - PHP: Elementary 
      - HTML: Intermediate
      - CSS: Elementary
      - Javascript: Elementary\
    `;
  }
}
