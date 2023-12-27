package com.devashish94.Task.controller;

import com.devashish94.Task.model.Task;
import com.devashish94.Task.model.TaskList;
import com.devashish94.Task.service.TaskListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@CrossOrigin
public class TaskListController {

    @Autowired
    TaskListService taskListService;

    @PostMapping("/list/create")
    public TaskList createTaskList(@RequestBody TaskList taskList) {
        return taskListService.createTaskList(taskList);
    }

    @GetMapping("/lists/all")
    public Iterable<TaskList> getAllTaskLists() {
        return taskListService.getAllTaskLists();
    }

    @GetMapping("/list/{taskListId}")
    public ResponseEntity<TaskList> fetchTaskById(@PathVariable UUID taskListId) {
        return taskListService.getTaskById(taskListId);
    }

    @DeleteMapping("/list/delete/{taskListId}")
    public void deleteListById(@PathVariable UUID taskListId) {
        taskListService.deleteTaskListById(taskListId);
    }

}
