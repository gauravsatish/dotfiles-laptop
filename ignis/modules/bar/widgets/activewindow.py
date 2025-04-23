from ignis.widgets import Widget
from ignis.services.hyprland import HyprlandService, HyprlandWindow

hyprland = HyprlandService.get_default()


class ActiveWindow(Widget.Label):
    @staticmethod
    def update_label(active_window: HyprlandWindow):
        title = active_window.title
        if title is None:
            return ""
        if title == "~":
            title = active_window.initial_title
        elif title.endswith("~"):
            title = title[:-1]
        if len(title) > 100:
            title = title[:101] + "..."
        return title

    def __init__(self):
        if hyprland.is_available:
            super().__init__(
                label=hyprland.bind(
                    "active_window",
                    transform=lambda value: self.update_label(value),
                )
            )
