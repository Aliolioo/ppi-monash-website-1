// ============================================================================
// Collaboration utilities — helpers for PARTNERS, COLLABORATIONS, PPI_NETWORK
// ============================================================================

export function getActivePartners(partners) {
  return [...partners]
    .filter((p) => p.active)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getInactivePartners(partners) {
  return [...partners]
    .filter((p) => !p.active)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getPartnerById(partners, id) {
  return partners.find((p) => p.id === id) || null;
}

export function getPartnerCategories(partners) {
  return [...new Set(getActivePartners(partners).map((p) => p.category))];
}

export function getCollaborationsByType(collaborations, type) {
  return collaborations.filter((c) => c.type === type);
}

export function getFeaturedCollaborations(collaborations) {
  return collaborations.filter((c) => c.featured);
}

export function getRecentCollaborations(collaborations, count = 6) {
  return [...collaborations]
    .filter((c) => c.status === "completed" || c.status === "ongoing")
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
}

export function getCollabTypes(collaborations) {
  const statuses = new Set(["completed", "ongoing"]);
  return [
    ...new Set(
      collaborations
        .filter((c) => statuses.has(c.status))
        .map((c) => c.type)
    ),
  ];
}

export function getNetworkByStatus(network, status) {
  if (status === "all") return network;
  return network.filter((n) => n.collaborationStatus === status);
}

export function getActiveNetworkMembers(network) {
  return network.filter((n) => n.collaborationStatus === "active");
}
