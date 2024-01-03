package com.aguslxrd.streamreactionerapirest.Controller;

import com.aguslxrd.streamreactionerapirest.Model.Entity.VideoEntity;
import com.aguslxrd.streamreactionerapirest.Service.VideoService;
import com.aguslxrd.streamreactionerapirest.Utils.ValidationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "*", allowedHeaders = "Requestor-Type", exposedHeaders = "X-Get-Header")
public class VideoController {

    @Autowired
    private VideoService videoService;

    @PostMapping("/public/video")
    @ResponseStatus(HttpStatus.CREATED)
        public ResponseEntity createVideo(@RequestBody VideoEntity video){
            Map<String, Object> response = new HashMap<>();

            try{

                if(video != null) //la validacion no funciona
                {
                    videoService.save(video);
                    response.put("message", "video has been saved.");
                    response.put("video saved (url): ", video.getUrlVideo());
                    return new ResponseEntity<>(response, HttpStatus.OK);
                }else{
                    response.put("message", "Error");
                    return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
                }
            }catch (DataAccessException exceptionDataAccess) {
                response.put("message", "internal error");
                response.put("error", exceptionDataAccess.getMessage());
                return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
            }

        }

        @GetMapping("/video")
            public ResponseEntity<List<VideoEntity>> getVideos(){
                List<VideoEntity> videoList = videoService.findAll();
                if (videoList != null) {
                    return new ResponseEntity<>(videoList, HttpStatus.OK);
                } else {
                    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
                }

            }

}
