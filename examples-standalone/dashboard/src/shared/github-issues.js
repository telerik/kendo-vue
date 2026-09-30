import { shallowRef } from 'vue';

export const issues = shallowRef([]);
export const loading = shallowRef(false);
export const error = shallowRef('');
export const loaded = shallowRef(false);

let pendingRequest;

export function loadIssues(force = false) {
    if (pendingRequest) return pendingRequest;
    if (loaded.value && !force) return Promise.resolve();

    loading.value = true;
    error.value = '';
    pendingRequest = fetch('https://api.github.com/repos/telerik/kendo-ui-core/issues?state=all&per_page=100')
        .then((response) => {
            if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
            return response.json();
        })
        .then((data) => {
            if (!Array.isArray(data)) throw new Error('GitHub returned an unexpected response');
            issues.value = data.filter((issue) => !issue.pull_request);
            loaded.value = true;
        })
        .catch((reason) => {
            error.value = `${reason.message}. Please try again later.`;
        })
        .finally(() => {
            loading.value = false;
            pendingRequest = undefined;
        });

    return pendingRequest;
}
