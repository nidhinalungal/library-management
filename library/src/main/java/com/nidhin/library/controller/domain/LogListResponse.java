package com.nidhin.library.controller.domain;

import com.nidhin.library.entity.Log;

import java.util.List;

public class LogListResponse {
    private final List<Log> logs;

    public LogListResponse(List<Log> logs) {
        this.logs = logs;
    }

    public List<Log> getLogs() {
        return logs;
    }
}
