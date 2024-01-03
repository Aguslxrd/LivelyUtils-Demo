package com.aguslxrd.streamreactionerapirest.Repository;

import com.aguslxrd.streamreactionerapirest.Model.Entity.VideoEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VideoRepository extends CrudRepository<VideoEntity, Long> {

}
