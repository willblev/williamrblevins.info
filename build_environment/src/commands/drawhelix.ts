import { Command } from '../registery';

/**
 * drawHelix command.
 *
 * Displays drawHelix information.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class drawHelix implements Command {
  /**
   * Trigger for the command.
   *
   * Must be unique.
   */
  public trigger: string = 'drawhelix';
  /**
   * Description of the command.
   *
   * This is displayed by the `help` command.
   */
  public description: string = 'Outputs ASCII art of a 3D DNA sequence.';

 /**
   * Function to run when this command is triggered.
   *
   * @param args A list of arguments given by the command.
   * @return The output of the command. Can be a promise.
   */
  public async run(args: string[]): Promise<string> {
    return `\
.... $A---T$ .....
.... $C----G$ ....
..... $C----G$ ...
...... $C---G$ ...
....... $T-A$ ....
........ T$ ......
...... $T---A$ ...
..... $G----C$ ...
.... $G----C$ ....
.... $G---C$ .....
...... $T ........
..... $A-T$ ......
.... $A---T$ .....
.... $C----G$ ....
..... $C----G$ ...
...... $C---G$ ...
....... $T-A$ ....
........ T$ ......
...... $T---A$ ...
..... $G----C$ ...
.... $G----C$ ....
.... $G---C$ .....
...... $T ........
..... $C-T$ ......
.... $A---T$ .....
.... $C----G$ ....
..... $C----G$ ...
...... $C---G$ ...
....... $T-A$ ....
........ T$ ......
...... $T---A$ ...\
    `;
  }
}