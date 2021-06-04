import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ToolbarService, DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';
import { TitleBar } from '../../title-bar';
import { defaultDocument, WEB_API_ACTION } from '../../data';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ToolbarService]
})
export class AppComponent {
  public hostUrl: string = 'https://ej2services.syncfusion.com/production/web-services/';
  @ViewChild('documenteditor_default')
  public container: DocumentEditorContainerComponent;
  public culture: string = 'en-US';
  titleBar: TitleBar;

  onCreate(): void {
      let titleBarElement: HTMLElement = document.getElementById('default_title_bar');
      this.titleBar = new TitleBar(titleBarElement, this.container.documentEditor, true);
      this.container.serviceUrl = this.hostUrl + WEB_API_ACTION;
      this.container.documentEditor.open(JSON.stringify(defaultDocument));
      this.container.documentEditor.documentName = 'Getting Started';
      this.titleBar.updateDocumentTitle();
  }

  onDocumentChange(): void {
      if (!isNullOrUndefined(this.titleBar)) {
          this.titleBar.updateDocumentTitle();
      }
      this.container.documentEditor.focusIn();
  }
}
