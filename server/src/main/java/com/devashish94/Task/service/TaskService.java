package com.devashish94.Task.service;

import com.devashish94.Task.model.Task;
import com.devashish94.Task.model.TaskList;
import com.devashish94.Task.repository.TaskListRepository;
import com.devashish94.Task.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TaskService {

    @Autowired
    TaskRepository taskRepository;

    @Autowired
    TaskListRepository taskListRepository;

    public Iterable<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public ResponseEntity<Task> getTaskById(UUID taskId) {
        return taskRepository
                .findById(taskId)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    public Task createTask(UUID taskListId, Task task) throws Exception {
        try {
            Optional<TaskList> taskListOptional = taskListRepository.findById(taskListId);
            if (taskListOptional.isPresent()) {
                Task newTask = Task.builder()
                        .title(task.getTitle())
                        .description(task.getDescription())
                        .priority(task.getPriority())
                        .taskList(taskListOptional.get())
                        .build();
                return taskRepository.save(newTask);
            }
            return null;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            throw new Exception(e);
        }
    }

    public void deleteById(UUID taskId) {
        taskRepository.deleteById(taskId);
    }

    public List<Task> getTasksByTaskListId(UUID taskListId) {
        return taskRepository.findByTaskListId(taskListId);
    }

}
