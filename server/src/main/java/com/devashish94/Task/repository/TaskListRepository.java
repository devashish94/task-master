package com.devashish94.Task.repository;

import com.devashish94.Task.model.TaskList;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface TaskListRepository extends CrudRepository<TaskList, UUID> {
}
