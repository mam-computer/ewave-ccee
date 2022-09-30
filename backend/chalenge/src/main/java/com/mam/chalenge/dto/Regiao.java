package com.mam.chalenge.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
public class Regiao {
    public ArrayList<String> sigla;
    public ArrayList<Geracao> geracao;
    public ArrayList<Compra> compra;
}
