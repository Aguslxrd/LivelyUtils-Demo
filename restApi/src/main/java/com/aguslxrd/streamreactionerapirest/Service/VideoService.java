package com.aguslxrd.streamreactionerapirest.Service;

import com.aguslxrd.streamreactionerapirest.Model.Entity.VideoEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface VideoService {
    public VideoEntity save(VideoEntity videoToSave);

    @Transactional(readOnly = true)
    public VideoEntity findById(Long id);

    public void DeleteById(Long videoId);
    public List<VideoEntity> findAll();

    void deleteAllVideoReactions();
}
