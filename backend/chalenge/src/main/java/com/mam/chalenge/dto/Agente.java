package com.mam.chalenge.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;
import java.util.ArrayList;

@Getter
@Setter
public class Agente {
    private ArrayList<String> codigo;
    private ArrayList<ZonedDateTime> data;
    private ArrayList<Regiao> regiao;
}


