
import { Pager, PagerProps } from '@progress/kendo-vue-data-tools';

export const TreeListPager = (props: PagerProps) => {
    return (
      <Pager
        {...props}
        previousNext={true}
        buttonCount={8}
            // Configure the Pager props here.
            // See example: https://www.telerik.com/kendo-vue-ui/components/datatools/pager/
        />
    );
}
