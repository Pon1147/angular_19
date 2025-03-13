import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css', 
  
})
export class AppComponent {
  imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSROH5FDIpUItYrN5yFeDqkgvBWxNtxfc5vUQ&s'
  isEditTable = true; 
  // Hiểu đơn giản thì ở thể ex2,
  // contentEditable là thuộc tính của thẻ div quyết định xem 
  // nội dung của thể có thể thay đổi hay không.
  // Giá trị của contentEditTable này được liên kết với
  // biến isEditTable trong typescript bằng cách bọc 
  // thuộc tính contentEditTable trong dấu [].
  // Nếu isEditTable = true, nội dung của thẻ div sẽ có 
  // thể thay đổi. Ngược lại false thì không thể.
}