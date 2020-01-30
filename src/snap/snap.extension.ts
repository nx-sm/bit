import { Extension } from '../harmony';
import provideSnap from './snap.provider';
import ScopeExt from '../scope/scope.extension';
import { PaperExt } from '../extensions/paper';
import { WorkspaceExt } from '../workspace';

export default Extension.instantiate({
  name: 'Snap',
  dependencies: [PaperExt, WorkspaceExt, ScopeExt],
  config: {},
  provider: provideSnap
});
