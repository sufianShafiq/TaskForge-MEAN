import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService, Task } from '../services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: tasks => (this.tasks = tasks),
      error: err => console.error('Error fetching tasks', err)
    });
  }

  deleteTask(id: string): void {
    if (!confirm('Are you sure you want to delete this task?')) return;
    this.taskService.deleteTask(id).subscribe({
      next: () => this.loadTasks(),
      error: err => console.error('Error deleting task', err)
    });
  }

  toggleCompletion(task: Task): void {
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe({
      error: err => console.error('Error updating task', err)
    });
  }

  editTask(id: string | undefined): void {
    if (!id) return;
    this.router.navigate(['/edit', id]);
  }
}