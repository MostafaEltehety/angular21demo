import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.scss',
})
export class ControlFlow {
control:string="@if @for @switch";
elseIf:string=`@if (role === 'admin') {
  <p>Admin Panel</p>
} @else if (role === 'user') {
  <p>User Dashboard</p>
} @else {
  <p>Guest</p>
}
`;
for:string=`@for (user of users; track $index) {
  <li>{{ $index }} - {{ user.name }}</li>
}
`;
table:string=`| Variable | معناها      |
| -------- | ----------- |
|  $index  | رقم العنصر  |
|  $first  | أول عنصر    |
|  $last   | آخر عنصر    |
|  $even   | زوجي        |
|  $odd    | فردي        |
|  $count  | العدد الكلي |
`;
empty:string=`@empty (ميزة جديدة 🔥)`;
emptyCode:string=`@for (user of users; track user.id) {
  <p>{{ user.name }}</p>
} @empty {
  <p>No users found</p>
}
`;

notes:string=`🚀 ليه تستخدم Control Flow الجديد؟

✔ أسرع
✔ أوضح
✔ بدون ng-template
✔ أقرب لـ JS
✔ أفضل مع Signals
لا تحتاج CommonModule

لا تستخدم * خالص

@for لا يدعم async pipe مباشرة → استخدم signal أو computed
`;

}
