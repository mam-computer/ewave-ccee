package com.mam.chalenge.controller;

import com.mam.chalenge.dto.Agente;
import com.mam.chalenge.service.FileProcessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class UploadFileController {

    @Autowired
    private FileProcessorService fileProcessorService;

    @PostMapping("/upload-file")
    public ResponseEntity<Boolean> uploadFile(@RequestBody ArrayList<Agente> agentes) {
        try {
            fileProcessorService.processFile(agentes);
            return new ResponseEntity(Boolean.TRUE, HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
