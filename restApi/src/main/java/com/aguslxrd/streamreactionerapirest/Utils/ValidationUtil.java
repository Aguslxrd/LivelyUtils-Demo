package com.aguslxrd.streamreactionerapirest.Utils;

import com.aguslxrd.streamreactionerapirest.Model.Entity.UserEntity;
import com.aguslxrd.streamreactionerapirest.Model.Entity.VideoEntity;
import org.springframework.stereotype.Component;

@Component
public class ValidationUtil {

    public boolean isValidUser(UserEntity user) {
        return user.getUsername() != null &&
                user.getEmail() != null &&
                user.getPasswd() != null;
    }
}
