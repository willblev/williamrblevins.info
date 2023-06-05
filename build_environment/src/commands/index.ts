import { Education } from './education';
import { Help } from './help';
import { Lang } from './lang';
import { ORCID } from './orcid';
import { Projects } from './projects';
import { Whois } from './whois';
import { drawHelix } from './drawhelix';

/**
 * The array of commands.
 */
export const commands = [
  new Help(),
  new Lang(),
  new Education(),
  new Projects(),
  new ORCID(),
  new Whois(),
  new drawHelix(),
];
