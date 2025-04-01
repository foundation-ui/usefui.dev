export type LibraryProps = {
  readonly id: bigint;
  readonly creatorId: bigint;
  readonly title: string;
  readonly description: string;
  readonly published: boolean;
  readonly library: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
