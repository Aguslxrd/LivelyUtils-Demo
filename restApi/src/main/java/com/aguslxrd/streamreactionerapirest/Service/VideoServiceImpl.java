package com.aguslxrd.streamreactionerapirest.Service;

import com.aguslxrd.streamreactionerapirest.Model.Entity.VideoEntity;
import com.aguslxrd.streamreactionerapirest.Repository.VideoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VideoServiceImpl implements VideoService{
    @Autowired
    private VideoRepository videoRepository;
    @Transactional
    @Override
    public VideoEntity save(VideoEntity videoToSave) {
        return videoRepository.save(videoToSave);
    }

    @Transactional(readOnly = true)
    @Override
    public VideoEntity findById(Long id) {
        return videoRepository.findById(id).orElse(null);
    }

    @Override
    public void DeleteById(Long id) {
        videoRepository.deleteById(id);
    }

    @Transactional(readOnly = true)
    @Override
    public List<VideoEntity> findAll() {
        return (List<VideoEntity>) videoRepository.findAll();
    }

    @Override
    public void deleteAllVideoReactions(){
        videoRepository.deleteAll();
    }
}
