import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService, Task } from '../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  form: FormGroup;
  taskId: string | null = null;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      completed: [false]
    });
  }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    if (this.taskId) {
      this.isEdit = true;
      this.taskService.getTask(this.taskId).subscribe(task => {
        this.form.patchValue(task);
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const task: Task = { ...this.form.value };
    if (this.isEdit && this.taskId) {
      task._id = this.taskId;
      this.taskService.updateTask(task).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.taskService.createTask(task).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}