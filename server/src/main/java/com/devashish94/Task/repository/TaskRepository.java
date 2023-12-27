package com.devashish94.Task.repository;

import com.devashish94.Task.model.Task;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface TaskRepository extends CrudRepository<Task, UUID> {
    List<Task> findByTaskListId(UUID taskListId);

}
