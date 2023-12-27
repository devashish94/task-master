package com.devashish94.Task.service;

import com.devashish94.Task.model.TaskList;
import com.devashish94.Task.repository.TaskListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TaskListService {

    @Autowired
    TaskListRepository taskListRepository;

    public TaskList createTaskList(TaskList taskList) {
        TaskList newTaskList = TaskList.builder()
                .listName(taskList.getListName())
                .tasks(List.of())
                .build();
        return taskListRepository.save(newTaskList);
    }

    public Iterable<TaskList> getAllTaskLists() {
        return taskListRepository.findAll();
    }

    public ResponseEntity<TaskList> getTaskById(UUID taskListId) {
        return taskListRepository
                .findById(taskListId)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    public void deleteTaskListById(UUID taskListId) {
        taskListRepository.deleteById(taskListId);
    }
}
