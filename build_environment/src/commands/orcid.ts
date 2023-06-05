import { Command } from '../registery';

/**
 * ORCID command.
 *
 * Displays my ORCID.
 * It does a search to the argument if it is given.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class ORCID implements Command {
  /**
   * Trigger for the command.
   *
   * Must be unique.
   */
  public trigger: string = 'orcid';
  /**
   * Description of the command.
   *
   * This is displayed by the `help` command.
   */
  public description: string = 'Print my ORCID and see my most recent publications.';

 /**
   * Function to run when this command is triggered.
   *
   * @param args A list of arguments given by the command.
   * @return The output of the command. Can be a promise.
   */
  public async run(args: string[]): Promise<string> {
    return `\
      My ORCID is:

      0000-0002-5222-2321
      
      
      My most recent publications are:     
     
		Blevins, W. R., Tavella, T., Moro, S. G., Blasco-Moreno, B., Closa-Mosquera, A., Díez, J., Carey, L. B. and Albà, M. M.
		‘Extensive post-transcriptional buffering of gene expression in the response to severe oxidative stress in baker’s 	yeast’
		Scientific Reports, 9(1), p. 11005. doi: 10.1038/s41598-019-47424-w
		   Published on July 29th, 2019

		Blevins, W. R., Carey, L. B. and Albà, M. M.
		‘Transcriptomics data of 11 species of yeast identically grown in rich media and oxidative stress conditions’
		BMC Research Notes. BioMed Central, 12(1), p. 250. doi:10.1186/s13104-019-4286-0
		   Published on May 3rd, 2019
		   
		Blevins, W. R., Ruiz-Orera, J., Messeguer, X., Blasco-Moreno, B., Villanueva-Canas, J. L., Espinar, L., Diez, J., Carey, L. and Alba, M. M.
		‘Frequent birth of de novo genes in the compact yeast genome’
		bioRxiv, p. 575837. doi: 10.1101/575837
		   Preprint uploaded on March 13th, 2019

		van Dijk, D., Dhar, R., Missarova, A. M., Espinar, L., Blevins, W. 	R., Lehner, B. and Carey, L. B.  
		‘Slow-growing cells within isogenic populations have increased RNA polymerase error rates and DNA damage’
		Nature Communucations 6(1), p. 7972. doi: 10.1038/ncomms8972
		   Published on August 13th, 2015\
   `;
  }
}
