import { Command } from './command';

/**
 * Command registery
 *
 * Keeps track of all commands in the system.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Register {
  /**
   * An array of commands in the system.
   */
  private commands: Command[] = [];

  /**
   * Register an array of commands.
   *
   * This replaces the old commands set.
   *
   * @param commands The array of commands to register.
   */
  public register(commands: Command[]): void {
    this.commands = commands;
  }

  /**
   * Get all registered commands.
   *
   * @return An array of commands.
   */
  public getAll(): Command[] {
    return this.commands;
  }

  /**
   * Run a command.
   *
   * @param input The raw input.
   * @return A string output.
   */
  public async run(input: string): Promise<string> {
    const args = input.trim().split(' ').filter(item => item !== '');
    var cmd = args.shift().toLowerCase();
    // Return nothing when no command is given.
    if (!cmd) {
		cmd='Help';
		return '';
    }
    
    if (cmd==''){
		cmd='Help';
		return '';
	}
	
    const command = this.commands.find(
      findCommand => findCommand.trigger === cmd,
    );
		
    if (!command) {
		return 'Command not found. Type `help` for a list of available commands.';
    }

    return await command.run(args);
  }
}

/**
 * The singleton of the registery.
 */
export const registery = new Register();
