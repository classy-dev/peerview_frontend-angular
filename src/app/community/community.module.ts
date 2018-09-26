/* angular components */
import {
  NgModule
} from '@angular/core';
import {
  CommunityComponent
} from './community.component';
import {
  CommunityLeftMenuComponent
} from './components/left-menu/left-menu.component';
import {
  CommunityRightMenuComponent
} from './components/right-menu/right-component';
import {
  CommunityTabMenuComponent
} from './components/tab-menu/tab-menu.component';
import {
  SharedModule
} from '../shared/components/shared.module';
import {
  CLImageHoverDirectiveComponent
} from './components/directives/cl-image-hover.component';
import {
  communityRouting
} from './community-routing.component';
import {
  StudentCommunityComponent
} from './student-community/student-community.component';
import {
  PrivateCommunityComponent
} from './private-community/private-community.component';
import {
  CommunityMobileHeader
} from './components/mobile-header-menu/mobile-header.component';

@NgModule({
  imports : [
    SharedModule,
    communityRouting
  ],
  declarations : [
    CommunityComponent,
    CommunityLeftMenuComponent,
    CommunityRightMenuComponent,
    CommunityTabMenuComponent,
    CLImageHoverDirectiveComponent,
    StudentCommunityComponent,
    PrivateCommunityComponent,
    CommunityMobileHeader
  ],
  exports: [],
  providers: [],
  entryComponents: []
})
export class CommunityModule {}
