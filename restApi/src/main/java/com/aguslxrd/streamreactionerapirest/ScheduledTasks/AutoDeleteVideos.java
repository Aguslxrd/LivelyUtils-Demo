package com.aguslxrd.streamreactionerapirest.ScheduledTasks;

import com.aguslxrd.streamreactionerapirest.Model.Entity.VideoEntity;
import com.aguslxrd.streamreactionerapirest.Repository.VideoRepository;
import com.aguslxrd.streamreactionerapirest.Service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
public class AutoDeleteVideos {
    @Autowired
    private VideoService videoService;

    @Scheduled(fixedRate = 24 * 60 * 60 * 1000, initialDelay = 12 * 60 * 60 * 1000)
    @Transactional
    public void scheduledTaskDeleteVideos() {
        List<VideoEntity> reactions = videoService.findAll();
        if (!reactions.isEmpty()) {
            videoService.deleteAllVideoReactions();
        }
    }

}
