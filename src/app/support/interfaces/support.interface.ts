import { ISection } from './section.intefrace';

export interface ISupport {
  title: string;
  content: string;
  section?: ISection[];
  file?: File;
}
