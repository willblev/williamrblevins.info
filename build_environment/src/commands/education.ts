import { Command } from '../registery';

/**
 * Education command.
 *
 * Display my education history.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Education implements Command {
  /**
   * Trigger for the command.
   *
   * Must be unique.
   */
  public trigger: string = 'education';
  /**
   * Description of the command.
   *
   * This is displayed by the `help` command.
   */
  public description: string = 'Display my education history.';

  /**
   * Function to run when this command is triggered.
   *
   * @param args A list of arguments given by the command.
   * @return The output of the command. Can be a promise.
   */
  public async run(args: string[]): Promise<string> {
    return `\

      PhD in Biomedicine:
      - Status: [**********] 100% completed
      - Institution: Pompeu Fabra University
      - Location: Barcelona, Spain
      - Duration: 2015-2020
      
      MSc in Bioinformatics:
      - Status: [**********] 100% completed
      - Institution: Pompeu Fabra University
      - Location: Barcelona, Spain
      - Duration: 2013-2015
    
      BSc in Biology && BA in Spanish:
      - Status: [**********] 100% completed
      - Institution: State University of New York at Geneseo
      - Location: New York, USA
      - Duration: 2006-2010\
    `;
  }
}
