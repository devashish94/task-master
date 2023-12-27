package com.devashish94.Task.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Builder
@Data
@Entity
@Table(name = "tasks")
@NoArgsConstructor
@AllArgsConstructor
public class Task {
    @Id
    @GeneratedValue
    private UUID id;

    @Column
    private String title;
    @Column
    private String description;
    @Column
    private String priority;

    @ManyToOne
    @JoinColumn(name = "tasklist_id", nullable = false)
    private TaskList taskList;
}
