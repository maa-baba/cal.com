"use client";

import MembersView from "@calcom/features/ee/organizations/pages/members";
import Shell from "@calcom/features/shell/Shell";
import { useLocale } from "@calcom/lib/hooks/useLocale";

const MembersPage: React.FC = () => {
  const { t } = useLocale();
  return (
    <Shell
      withoutMain={false}
      title={t("organization_members")}
      description={t("organization_description")}
      subtitle={t("organization_description")}>
      <MembersView />
    </Shell>
  );
};

export default MembersPage;
