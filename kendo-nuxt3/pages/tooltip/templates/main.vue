<template>
  <div > 
    <Tooltip
              :anchor-element="'target'"
              :content="'myTemplate'"
            :positions="'bottom'"
                >
                <template v-slot:myTemplate="{props}">
                    <a>
                      {{" "}}
                      A template for: <strong>{{props.title}}</strong>
                    </a>
              </template>
            <p>
        <strong>Wikipedia</strong> is a multilingual,
        <a
          title="https://en.wikipedia.org/wiki/Web_application"
          href="https://en.wikipedia.org/wiki/Web_application"
        >
          web-based
        </a>
        ,
        <a
          title="https://en.wikipedia.org/wiki/Free_content"
          href="https://en.wikipedia.org/wiki/Free_content"
        >
          free-content
        </a>
        <a
          title="https://en.wikipedia.org/wiki/Encyclopedia"
          href="https://en.wikipedia.org/wiki/Encyclopedia"
        >
          encyclopedia
        </a>
        &nbsp;project supported by the
        <a
          title="https://en.wikipedia.org/wiki/Wikimedia_Foundation"
          href="https://en.wikipedia.org/wiki/Wikimedia_Foundation"
        >
          Wikimedia Foundation&nbsp;
        </a>
        and based on a model of openly editable content. Wikipedia is the
        largest and most popular general &nbsp;
        <a
          title="https://en.wikipedia.org/wiki/Reference_work"
          href="https://en.wikipedia.org/wiki/Reference_work"
        >
          reference work
        </a>
        &nbsp;on the Internet, and is named as one of the most popular websites.
      </p>

      <p>
        - From the Wikipedia article &nbsp;on{" "}
        <a title="https://en.wikipedia.org/" href="https://en.wikipedia.org/">
          Wikipedia
        </a>
      </p>
            </Tooltip>
          </div>
</template>
<script lang="ts">
import { Tooltip } from '@progress/kendo-vue-tooltip';

export default {
  components: {
    Tooltip
  }
};
</script>
