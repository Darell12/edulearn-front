import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from "../components/course-card/course-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, CourseCardComponent]
})
export class HomeComponent {

}
