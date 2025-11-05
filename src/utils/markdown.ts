import { createElement } from "react";

import Markdown from "@jetbrains/ring-ui-built/components/markdown/markdown";
import DOMPurify from "dompurify";
import highlightJs from "highlight.js/lib/core";
import MarkdownIt from "markdown-it";

type MarkdownRenderOptions = {
  inline?: boolean;
  className?: string;
  containerClassName?: string;
};

const markdownItRenderer = MarkdownIt("commonmark", {
  html: false,
  highlight(str: string, lang: string) {
    if (lang && highlightJs.getLanguage(lang)) {
      return highlightJs.highlight(str, { language: lang }).value;
    }

    return "";
  },
}).enable("table");

const joinClassNames = (baseClass: string, extraClass?: string) =>
  extraClass ? `${baseClass} ${extraClass}` : baseClass;

export const markdown = (
  text: string,
  { inline = true, className, containerClassName }: MarkdownRenderOptions = {}
) => {
  const renderedMarkdown = markdownItRenderer.render(text);
  const sanitizedRenderedMarkdown = DOMPurify.sanitize(
    String(renderedMarkdown)
  );
  const sanitizedRenderedMarkdownContainer = createElement("div", {
    className: containerClassName,
    dangerouslySetInnerHTML: { __html: sanitizedRenderedMarkdown },
  });

  return createElement(Markdown, {
    inline,
    className: joinClassNames("ring-highlight-highlightContainer", className),
    children: sanitizedRenderedMarkdownContainer,
  });
};
