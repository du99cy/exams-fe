import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@shared/modules/editor.module';
import { NormalEditorModule } from '@shared/modules/normal-editor.module';
import { sharedTestModule } from '@shared/modules/test.module';
import { TestComponent } from './components/test/test.component';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  imports: [
    TestRoutingModule,
    sharedTestModule,
    NormalEditorModule,
    FormsModule,
    EditorModule
  ],
  declarations: [TestComponent],
})
export class TestModule {}
