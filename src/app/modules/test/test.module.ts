import { NgModule } from '@angular/core';
import { sharedTestModule } from '@shared/modules/test.module';
import { TestComponent } from './components/test/test.component';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  imports: [ TestRoutingModule,sharedTestModule ],
  declarations: [ TestComponent ],
})
export class TestModule { }
