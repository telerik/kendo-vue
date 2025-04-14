<template>
  <div class="example">
    <div class="example-wrap">
      <div class="row">
        <div class="col-4">
          <p>Pulse animation(Default)</p>
          <Card>
            <CardHeader class="k-hbox">
              <Skeleton
                :shape="'circle'"
                :style="{
                  width: '45px',
                  height: '45px',
                  'margin-right': 16,
                }"
              />
              <div
                :style="{
                  flex: '1 1 50%',
                }"
              >
                <Skeleton
                  :shape="'text'"
                  :style="{
                    width: '100%',
                  }"
                />
                <Skeleton
                  :shape="'text'"
                  :style="{
                    width: '40%',
                  }"
                />
              </div>
            </CardHeader>
            <Skeleton
              :shape="'rectangle'"
              :style="{
                width: '100%',
                height: '150px',
              }"
            />
            <CardFooter>
              <Skeleton
                :shape="'text'"
                :style="{
                  width: '100%',
                }"
              />
            </CardFooter>
          </Card>
        </div>
        <div class="col-4">
          <p>Wave animation</p>
          <Card>
            <CardHeader class="k-hbox">
              <Skeleton
                :shape="'circle'"
                :style="{
                  width: '45px',
                  height: '45px',
                  'margin-right': 16,
                }"
                :animation="{ type: 'wave' }"
              />
              <div
                :style="{
                  flex: '1 1 50%',
                }"
              >
                <Skeleton
                  :shape="'text'"
                  :style="{
                    width: '100%',
                  }"
                  :animation="{ type: 'wave' }"
                />
                <Skeleton
                  :shape="'text'"
                  :style="{
                    width: '40%',
                  }"
                  :animation="{ type: 'wave' }"
                />
              </div>
            </CardHeader>
            <Skeleton
              :shape="'rectangle'"
              :style="{
                width: '100%',
                height: '150px',
              }"
              :animation="{ type: 'wave' }"
            />
            <CardFooter>
              <Skeleton
                :shape="'text'"
                :style="{
                  width: '100%',
                }"
                :animation="{ type: 'wave' }"
              />
            </CardFooter>
          </Card>
        </div>
        <div class="col-4">
          <p>No animation</p>
          <Card>
            <CardHeader class="k-hbox">
              <Skeleton
                :shape="'circle'"
                :style="{
                  width: '45px',
                  height: '45px',
                  'margin-right': 16,
                }"
                :animation="false"
              />
              <div
                :style="{
                  flex: '1 1 50%',
                }"
              >
                <Skeleton
                  :shape="'text'"
                  :style="{
                    width: '100%',
                  }"
                  :animation="false"
                />
                <Skeleton
                  :shape="'text'"
                  :style="{
                    width: '40%',
                  }"
                  :animation="false"
                />
              </div>
            </CardHeader>
            <Skeleton
              :shape="'rectangle'"
              :style="{
                width: '100%',
                height: '150px',
              }"
              :animation="false"
            />
            <CardFooter>
              <Skeleton
                :shape="'text'"
                :style="{
                  width: '100%',
                }"
                :animation="false"
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Skeleton } from '@progress/kendo-vue-indicators';
import { Card, CardHeader, CardFooter } from '@progress/kendo-vue-layout';

export default {
  components: {
    Skeleton,
    Card,
    CardHeader,
    CardFooter,
  },
};
</script>
