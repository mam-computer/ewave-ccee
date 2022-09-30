package com.mam.chalenge.service;

import com.mam.chalenge.dto.Agente;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Slf4j
@Service
public class FileProcessorService {
    private static final String STR_COD_AGENTES = "Codigos de agentes: ";
    private static final String STR_SEP = ";";

    public void processFile(final ArrayList<Agente> agentes) {
        StringBuffer sb = new StringBuffer(STR_COD_AGENTES);
        agentes.forEach(agente -> sb.append(agente.getCodigo().get(0)).append(STR_SEP));
        log.info(sb.toString());
    }
}
