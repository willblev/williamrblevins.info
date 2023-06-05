import { Command } from '../registery';

/**
 * Projects command.
 *
 * Displays some of the projects I have worked on
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Projects implements Command {
  /**
   * Trigger for the command.
   *
   * Must be unique.
   */
  public trigger: string = 'projects';
  /**
   * Description of the command.
   *
   * This is displayed by the `help` command.
   */
  public description: string = 'List some of the projects I have worked on.';

  /**
   * Function to run when this command is triggered.
   *
   * @param args A list of arguments given by the command.
   * @return The output of the command. Can be a promise.
   */
  public async run(args: string[]): Promise<string> {
    return `\
      Here are a few of the many projects I have enjoyed working on:
	  
	  Looking at emerging de novo genes in bakers yeast:
	  - Description: We identified and characterize putative de novo genes in S. cerevisiae.
	  - Category: PhD, Universitat Pompeu Fabra
	  - Status: [**********] 100% completed
	  - Use RNAseq (Illumina+Nanopore), Ribosome profiling, and proteomics data
	  - Sequenced 11 species & assembled de novo transcriptomes
	  - Coded in Bash/Python/R/Perl in Jupyter Notebooks
	  
      SmokeyTheBarrel:
      - Description: 200L charcoal-powered IoT smart BBQ smoker.
      - Category: For fun
      - Status: [**********] 100% completed
      - Built with upcycled materials
      - Runs on Arduino/ESP8266
      - PID temperature control
      - Remote control via Blynk app
      - Posts temperature data to Thingspeak (channel 164514)
      - Follow me @SmokeyTheBarrel on Twitter
      - Grab the code at https://github.com/willblev/SmokeyTheBarrel

      Boldar:
      - Description: A wild mushroom location predictor based on public weather data.
      - Category: For fun
      - Status: [********--] 80% completed
      - Python weather data scraper
      - Simple 2-week moisture prediction weighted model
      - Outputs predictions on a map via Google Maps API
      - Grab the code at https://github.com/willblev/boldar/tree/map_enabled
      
      Beacon-fi:
      - Description: A WiFi-based pseudo-geocaching tracker.
      - Category: Contracted for Lifeline Learning, a kids+tech course
      - Status: [**********] 100% completed
      - Coded in Lua
      - Runs on ESP8266
      - Designed custom PCB for kids to assemble the circuit
      - Grab the code at https://github.com/mademakerspace/beacon-fi
      
      Photobooth:
      - Description: A fully-automated stand-alone photobooth for events.
      - Category: Contracted for Espai Can Pages, a popular wedding venue
      - Status: [**********] 100% completed
      - DSLR camera + dye-sub printer + studio flash + 2 LCDs
      - Customizable screens, customizable print templates
      
      [x]Cite-A-Scientist
      - Description: An IoT motorized candy dispenser.
      - Category: For fun
      - Status: [******----] 60% completed
      - Runs on Arduino/ESP8266
      - Checks Google Scholar periodically & dispenses candy if there are new citations\
    `;
  }
}
