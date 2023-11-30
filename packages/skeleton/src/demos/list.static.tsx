import ProSkeleton from 'orca-pro-skeleton';

export default () => (
  <div
    style={{
      background: '#fafafa',
      padding: 24,
    }}
  >
    <ProSkeleton statistic={2} type="list" />
  </div>
);
