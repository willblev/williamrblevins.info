import { Command } from '../registery';

/**
 * Whois command.
 *
 * Displays whois information.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Whois implements Command {
  /**
   * Trigger for the command.
   *
   * Must be unique.
   */
  public trigger: string = 'whois';
  /**
   * Description of the command.
   *
   * This is displayed by the `help` command.
   */
  public description: string = 'Show my contact information.';

 /**
   * Function to run when this command is triggered.
   *
   * @param args A list of arguments given by the command.
   * @return The output of the command. Can be a promise.
   */
  public async run(args: string[]): Promise<string> {
    return `\
		Domain Name: WILLIAMRBLEVINS.INFO  
		Name: William R. Blevins, PhD
		Position: Bioinformatician
		Organization: National Center for Genomic Analysis (CNAG) & Center for Genomic Regulation (CRG)
		Group: Single Cell Genomics Group
		Street: C. Baldiri Reixac, 4
		City: Barcelona
		Postal Code: 08028
		Country: Spain
		Phone: +34 934 020 803
		Email: will.blevins@cnag.crg.eu\
    `;
  }
}
