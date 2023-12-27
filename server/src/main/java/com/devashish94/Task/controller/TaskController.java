package com.devashish94.Task.controller;

import com.devashish94.Task.model.Task;
import com.devashish94.Task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
public class TaskController {

    @Autowired
    TaskService taskService;

    @GetMapping("/tasks/all")
    public Iterable<Task> fetchAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/task/{taskId}")
    public ResponseEntity<Task> fetchTaskById(@PathVariable UUID taskId) {
        return taskService.getTaskById(taskId);
    }

    @GetMapping("/tasks/list/{taskListId}")
    public List<Task> fetchTasksByTaskListId(@PathVariable UUID taskListId) {
        return taskService.getTasksByTaskListId(taskListId);
    }

    @PostMapping("/task/create/list/{taskListId}")
    public ResponseEntity<Task> createTask(@PathVariable UUID taskListId, @RequestBody Task task) throws Exception {
        Task newTask = taskService.createTask(taskListId, task);
        if (newTask == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(newTask);
    }

    @DeleteMapping("/task/delete/{taskId}")
    public void deleteTaskById(@PathVariable UUID taskId) {
        taskService.deleteById(taskId);
    }

}
