---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
slug: {{ now.Format "2006-01-02" }}-{{ .Name | urlize }}
type: snacks
draft: true
tags:
  - default
---


