from ignis.services.backlight import BacklightService
from ignis.utils import Utils
from ignis.widgets import Widget
from ..shared_widgets import MaterialBrightnessSlider

backlight = BacklightService.get_default()


class BSD(Widget.Window):
    def __init__(self):
        super().__init__(
            layer="overlay",
            anchor=["bottom"],
            namespace="ignis_BSD",
            visible=False,
            css_classes=["rec-unset"],
            child=Widget.Box(
                css_classes=["osd"],
                child=[
                    Widget.Icon(
                        pixel_size=26,
                        style="margin-right: 0.5rem;",
                        image="brightness-symbolic",
                    ),
                    MaterialBrightnessSlider(),
                ],
            ),
        )

    def set_property(self, property_name, value):
        if property_name == "visible":
            self.__update_visible()

        super().set_property(property_name, value)

    @Utils.debounce(1000)
    def __update_visible(self) -> None:
        super().set_property("visible", False)
