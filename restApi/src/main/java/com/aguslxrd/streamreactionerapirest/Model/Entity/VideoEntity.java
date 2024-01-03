package com.aguslxrd.streamreactionerapirest.Model.Entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Table(name = "videos")
@Data
@NoArgsConstructor
public class VideoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_video")
    private Long idVideo;

    @NonNull
    @NotBlank(message = "Video url cannot be null or blank")
    @Column(name = "video_url")
    private String urlVideo;

    @NonNull
    @NotBlank(message = "Video descripton cannot be null or blank")
    @Column(name = "description_video")
    private String description;
}
