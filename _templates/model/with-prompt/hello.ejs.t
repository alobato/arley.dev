---
to: _templates/teste.js
---
<%= message %>
pluralize <%= h.inflection.pluralize(message) %>
singularize <%= h.inflection.singularize(message) %>
camelize <%= h.inflection.camelize(message) %>
camelize low_first_letter <%= h.inflection.camelize(message, true) %>
underscore <%= h.inflection.underscore(message) %>
underscore all_upper_case <%= h.inflection.underscore(message, true) %>
humanize <%= h.inflection.humanize(message) %>
humanize low_first_letter <%= h.inflection.humanize(message, true) %>
capitalize <%= h.inflection.capitalize(message) %>
dasherize <%= h.inflection.dasherize(message) %>
titleize <%= h.inflection.titleize(message) %>
demodulize <%= h.inflection.demodulize(message) %>
tableize <%= h.inflection.tableize(message) %>
classify <%= h.inflection.classify(message) %>
ordinalize <%= h.inflection.ordinalize(message) %>
actionfolder <%= actionfolder %>
generator <%= generator %>
action <%= action %>
subaction <%= subaction %>
cwd <%= cwd %>
